import {renderEventList} from "./renderEventList";
import {renderPagination} from "./pagination";
import {eventApi} from "../api/EventApi";
import {getEvents} from "../selectors/getEvents";
import {pagination} from "./Pagination.class";

export async function renderInit() {
  const res = await eventApi.fetchEvents('', '');
  renderEventList(getEvents(res))

  if (eventApi.total > 1) {
    pagination.total = eventApi.total;
    const data = pagination.change(1);
    renderPagination(data);
  }
}
