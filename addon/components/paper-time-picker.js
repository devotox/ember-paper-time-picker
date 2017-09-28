import moment from 'moment';
import PaperInput from 'ember-paper/components/paper-input';
import layout from 'ember-paper/templates/components/paper-input';

export default PaperInput.extend({
	layout,

	defaultOptions: {
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

	didInsertElement() {
		this._super(...arguments);

		this.set('options', Object.assign(
			this.get('defaultOptions'),
			this.get('options'), {
				change: (value) => {
					value = value ? moment(value).format(this.options.momentFormat) : '';
					this.sendAction('onChange', value);
				}
			}
		));

		let options = this.get('options');

		// Create a new instance of the timepicker.
		let timepicker = this.$('input').timepicker(options);
		this.set('timepicker', timepicker);
	},

	willDestroyElement() {
		this._super(...arguments);

		let timepicker = this.get('timepicker');

		// If the timepicker exists, destroy it on our way out
		if (timepicker.data('TimePicker') !== null) {
			timepicker.timepicker().destroy();
		}
	}
});