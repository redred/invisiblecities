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