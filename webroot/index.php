<!doctype html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <title>Invisible Cities</title>
  <script 
    data-main="js/compiled/config" 
    src="js/lib/require/require.js"></script>
  <link 
    rel="stylesheet" 
    type="text/css" 
    href="css/compiled/style.css">
</head>
<body>
<?php

  include('_tmpl_groups.php');
  include('_tmpl_cities.php');

?>
<div class="page">

  <header>
    <h2>Invisible Cities</h2>
  </header>
  <div class="page-description">
    Analysis of the book <em>Invisible Cities</em> by Italo Calvino<br>
    (work in progress)
  </div>

  <div class="tab-group">
    <div class="tab-buttons">
      <div class="tab-button" data-tab-target="tab-1">
        List views
      </div>
    </div>
    <div class="tab-content-wrap" data-tab-id="tab-1">
      <section class="body body-1"></section>
    </div><!-- .tab-content-wrap -->
    <div class="tab-content-wrap" data-tab-id="tab-2">
      <section class="body body-2"></section>
    </div><!-- .tab-content-wrap -->
  </div><!-- .tab-group -->

  <footer></footer>

</div>
</body>
</html>
