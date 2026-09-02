create table if not exists analytics (
  id uuid default gen_random_uuid() primary key,
  metric_name text not null unique,
  metric_value integer default 0,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

insert into analytics (metric_name, metric_value) values 
('total_views', 0),
('total_likes', 0),
('total_shares', 0)
on conflict (metric_name) do nothing;
