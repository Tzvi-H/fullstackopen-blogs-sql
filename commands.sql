-- Task 13.2.
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
    likes integer default 0
);

insert into blogs (author, url, title) values ('author 1', 'url 1', 'title 1');
insert into blogs (author, url, title, likes) values ('author 2', 'url 2', 'title 2', 5);
