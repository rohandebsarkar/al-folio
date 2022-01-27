---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 1
---

<div class="post">
  <ul class="post-list">
    {% for post in site.projects %}
      <li>
        <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
        <h3><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
        <p>{{ post.description }}</p>
      </li>
    {% endfor %}
  </ul>
</div>
