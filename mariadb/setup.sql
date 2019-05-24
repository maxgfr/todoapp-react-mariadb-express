create database tp3;
use tp3;

CREATE TABLE articles
(
id INTEGER AUTO_INCREMENT,
author TEXT,
status TEXT,
ts TEXT,
title TEXT,
PRIMARY KEY (id)
) COMMENT='this is article table';
