/* Small helpers used by the grammar files to keep the content readable. */
window.GRAMMAR = window.GRAMMAR || [];

/* Examples: one per line, "German | English" */
window.EX = function (s) {
  var items = s.trim().split('\n').map(function (l) {
    var p = l.split('|');
    return '<li><span class="ger">' + p[0].trim() + '</span>' + (p[1] ? '<span class="en">' + p[1].trim() + '</span>' : '') + '</li>';
  });
  return '<ul class="ex-list">' + items.join('') + '</ul>';
};

/* Tables: first line is the header, cells separated by "|" */
window.TBL = function (s) {
  var rows = s.trim().split('\n').map(function (l) { return l.split('|').map(function (c) { return c.trim(); }); });
  var head = '<tr>' + rows[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>';
  var body = rows.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('');
  return '<div class="table-wrap"><table><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>';
};

/* Practice block: tasks one per line, answers one per line */
window.PRACTICE = function (intro, tasks, answers) {
  var t = tasks.trim().split('\n').map(function (l) { return '<li>' + l.trim() + '</li>'; }).join('');
  var a = answers.trim().split('\n').map(function (l) { return '<li>' + l.trim() + '</li>'; }).join('');
  return '<section class="practice"><h2 id="uebung">Übung</h2><p>' + intro + '</p><ol>' + t +
    '</ol><details><summary>Lösungen zeigen</summary><ol>' + a + '</ol></details></section>';
};

window.MISTAKE = function (wrong, right, why) {
  return '<div class="mistake"><s>' + wrong + '</s> &nbsp;✓ <strong>' + right + '</strong>' + (why ? '<br>' + why : '') + '</div>';
};
window.NOTE = function (html) { return '<div class="note">' + html + '</div>'; };
