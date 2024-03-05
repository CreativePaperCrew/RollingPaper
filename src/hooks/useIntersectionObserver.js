import { useEffect, useRef } from 'react';

/**
 * 참조하는 요소를 감지하는 커스텀 훅
 * @param {Function} onIntersect - 감지하는 요소와 교차 시 실행할 콜백 함수
 * @param {Object} options - IntersectionObserver의 옵션
 * @param {Boolean} isEnabled - Observer 활성화 상태. false일 경우 observer 비활성화
 */

const useIntersectionObserver = (onIntersect, options, isEnabled = true) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      });
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.disconnect(currentTarget);
      }
    };
  }, [onIntersect, options, isEnabled]);

  return targetRef;
};

export default useIntersectionObserver;
