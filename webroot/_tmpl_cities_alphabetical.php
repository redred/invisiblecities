<script id="tmpl-cities-alphabetical" type="x-tmpl-mustache">
  <table data-id="cities-alphabetical">
    {{#title}}
      <thead>
        <tr>
          <th>{{title}}</th>
        </tr>
        <tr>
          <td>name</td>
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
