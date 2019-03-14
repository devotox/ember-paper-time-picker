import moment from 'moment';

import PaperInput from 'ember-paper/components/paper-input';

import layout from 'ember-paper/templates/components/paper-input';

const defaultOptions = {
	interval: 60,
	dynamic: false,
	dropdown: true,
	scrollbar: false,
	minTime: '12:00am',
	maxTime: '11:00pm',
	startTime: '12:00am',
	timeFormat: 'h:mm a',
	momentFormat: 'h:mm a'
};

export default PaperInput.extend({
	layout,

	options: null,

	didInsertElement() {
		if (this.isDestroyed || this.isDestroying) { return; }

		this._super(...arguments);

		this.set('options', Object.assign(
			defaultOptions,
			this.get('options'), {
				change: (value) => {
					value = value ? moment(value).format(this.options.momentFormat) : '';
					this.onChange(value);
				}
			}
		));

		let options = this.get('options');

		let field = this.element.querySelector('input');
		
		this.set('field', field);

		// Create a new instance of the timepicker.
		let timepicker = this.$(field).timepicker(options);

		this.set('timepicker', timepicker);
	},

	willDestroyElement() {
		if (this.isDestroyed || this.isDestroying) { return; }

		this._super(...arguments);

		let timepicker = this.get('timepicker');

		// If the timepicker exists, destroy it on our way out
		if (timepicker && timepicker.data('TimePicker') !== null) {
			timepicker.timepicker().destroy();
		}
	}
});