/**
 * 주어진 ISO 날짜 문자열을 지정된 형식으로 변환합니다.
 * @param {string} dateString ISO 형식의 날짜 문자열 - 2024-02-28T05:38:29.297985Z
 * @returns {string} 변환된 날짜 문자열 - 2024.02.28
 */
export function formatKSTDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

  return formattedDate.replace(/\s/g, '').replace(/\.$/, '');
}
