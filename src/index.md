---
layout: layout.njk
title: Homepage | My Blog
---

# My personal corner

Powered by 11ty.

<ul>
{% for article in news %}
<li>{{ article.title }}</li>
{% endfor %}
</ul>
