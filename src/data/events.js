let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, '');
console.log(todayStr);
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Abdullah',
    start: '2020-10-13T17:00:00',
    end: '2020-10-13T18:30:00',
  },
  {
    id: createEventId(),
    title: 'Hanaa',
    start: '2020-10-15T18:00:00',
    end: '2020-10-15T19:00:00',
  },
  {
    id: createEventId(),
    title: 'Hatem',
    start: '2020-10-17T17:00:00',
  },

];

export function createEventId() {
  return String(eventGuid++);
}
