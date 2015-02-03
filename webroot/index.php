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
  <script id="tmpl-groups" type="x-tmpl-mustache">
    <table data-id="groups">
      {{#title}}
        <thead>
          <tr>
            <th>{{title}}</th>
          </tr>
        </thead>
      {{/title}}
      <tbody>
      {{#groups}}
        <tr data-group-id="{{id}}">
          <td>{{id}}</td>
          <td data-id="{{id}}">{{name}}</td>
        </tr>
      {{/groups}}
      </tbody>
    </table>
  </script>
  <script id="tmpl-cities" type="x-tmpl-mustache">
    <table data-id="cities">
      {{#title}}
        <thead>
          <tr>
            <th>{{title}}</th>
          </tr>
        </thead>
      {{/title}}
      {{#cities}}
        <tr data-group-id="{{groupId}}">
          <td>{{name}}</td>
          {{#groupOrder}}
            <td>{{groupOrder}}</td>
          {{/groupOrder}}
        </tr>
      {{/cities}}
    </table>
  </script>
  <div class="page">
    <header>
      <h2>Invisible Cities</h2>
    </header>
    <section class="body body-1"></section>
    <section class="body body-2"></section>
    <footer>
    </footer>
  </div>
</body>
</html>
