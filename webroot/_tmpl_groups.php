<script id="tmpl-groups" type="x-tmpl-mustache">
  <table data-id="groups">
    {{#title}}
      <thead>
        <tr>
          <th>{{title}}</th>
        </tr>
        <tr>
          <td>order</td>
          <td>name</td>
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