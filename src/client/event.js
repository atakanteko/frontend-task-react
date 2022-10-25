import service from '../utils/axios/service';

const baseUrl = 'https://app.ticketmaster.com/discovery/v2';

export const getEventsByKeyword = (keyword, page) => service.get(`${baseUrl}/events?apikey=a4AfDDeJMrlH6xrmcUMJAWRM3Hlo3FY2&keyword=${keyword}&locale=*&page=${page}`);
export const getEventDetail = (id) => service.get(`${baseUrl}/events/${id}?apikey=a4AfDDeJMrlH6xrmcUMJAWRM3Hlo3FY2&locale=*`);

