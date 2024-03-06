import { useEffect, useRef } from 'react';

/**
 * 참조하는 요소를 감지하는 커스텀 훅
 * @param {Function} callback - 감지하는 요소와 교차 시 실행할 콜백 함수
 * @param {Object} options - IntersectionObserver의 옵션
 * @param {Boolean} condition - Observer 활성화 상태. false일 경우 observer 비활성화
 */

const useIntersectionObserver = (callback, options, condition = true) => {
  const observedRef = useRef(null);

  useEffect(() => {
    if (!condition) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);

    const currentTarget = observedRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      observer.disconnect(currentTarget);
    };
  }, [callback, options, condition]);

  return observedRef;
};

export default useIntersectionObserver;
