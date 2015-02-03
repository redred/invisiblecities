<script id="tmpl-first-letters" type="x-tmpl-mustache">
  <table data-id="first-letters">
    <thead>
      <tr>
        <th>{{title}}</th>
      </tr>
      <tr>
        <td>letter</td>
        <td>count</td>
      </tr>
    </thead>
    {{#firstLetters}}
      <tr>
        <td class="character">{{character}}</td>
        <td class="count">{{count}}</td>
      </tr>
    {{/firstLetters}}
  </table>
</script>
