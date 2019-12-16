---
layout: default
title: ブログ
---

# Blog

<ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url }}">{{ post.date | date_to_long_string }} : {{ post.title }}</a>
        </li>
    {% endfor %}
</ul>