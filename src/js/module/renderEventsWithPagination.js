import {renderEventList} from "./renderEventList";
import {renderPagination} from "./pagination";
import {eventApi} from "../api/EventApi";
import {getEvents} from "../selectors/getEvents";
import {pagination} from "./Pagination.class";
import { setLoading } from '../utils/setLoading';

const ALL_CODE = 'ALL';
export async function renderEventsWithPagination(data) {
  const fn = () => {};
  let {
    value,
    countryCode,
    page = 1,
    startLoading = fn,
    stopLoading = fn
  } = data || {}
  countryCode = countryCode === ALL_CODE ? '' : countryCode;

  const asyncCb = () => eventApi.fetchEvents(value, countryCode);
  const res = await setLoading(asyncCb, startLoading, stopLoading)

  renderEventList(getEvents(res))

  pagination.total = eventApi.total;
  const paginationData = pagination.change(page);
  renderPagination(paginationData);
}
