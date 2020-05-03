import { helper } from '@ember/component/helper';

export default helper(function dateLong(params/*, hash*/) {
  const options1 = { month: 'short', day: 'numeric', year:'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options1);
  return formatter.format(params[0]);
});
