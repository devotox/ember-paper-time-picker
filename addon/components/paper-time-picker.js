import PaperInput from 'ember-paper/components/paper-input';
// import layout from 'ember-paper/templates/components/paper-input';
import layout from 'paper-time-picker/templates/components/paper-time-picker';
import moment from 'moment';

export default PaperInput.extend({
	layout,

	classes: 'md-input flex-90',

	placeholder: 'Enter Time',

	options: {
		interval: 60,
		dynamic: false,
		dropdown: true,
		scrollbar: true,
		minTime: '12:00am',
		maxTime: '11:00pm',
		startTime: '12:00am',
		timeFormat: 'h:mm p',
		momentFormat: 'h:mm a'
	},

	actions: {
		onChange(value) {
			value = moment(value).format(this.options.momentFormat);
			this.sendAction('onChange', value);
		}
	}
});
