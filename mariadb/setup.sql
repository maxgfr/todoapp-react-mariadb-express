create database tp3;
use tp3;

CREATE TABLE articles
(
id INTEGER AUTO_INCREMENT,
title TEXT,
author TEXT,
status TEXT,
section TEXT,
ts TEXT,
PRIMARY KEY (id)
) COMMENT='articles table';
