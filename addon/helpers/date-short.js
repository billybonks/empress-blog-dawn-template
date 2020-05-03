import { helper } from '@ember/component/helper';

export default helper(function dateShort(params/*, hash*/) {
  debugger
  const options1 = { month: 'short', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options1);
  return formatter.format(params[0]);
});
