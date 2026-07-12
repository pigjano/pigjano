-- Run this once only if discipline_missions already exists.
-- It expands the allowed mission index from 0-29 to 0-89.
alter table public.discipline_missions
  drop constraint if exists discipline_missions_mission_index_check;

alter table public.discipline_missions
  add constraint discipline_missions_mission_index_check
  check (mission_index between 0 and 89);
