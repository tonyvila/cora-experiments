import * as CookieConsent from 'vanilla-cookieconsent';
import posthog from 'posthog-js';

function updatePostHogConsent() {
	if (CookieConsent.acceptedCategory('analytics')) {
		posthog.opt_in_capturing();
	} else {
		posthog.opt_out_capturing();
	}
}

CookieConsent.run({
	hideFromBots: false,
	onConsent: () => {
		updatePostHogConsent();
	},
	onChange: () => {
		updatePostHogConsent();
	},
	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom right',
			equalWeightButtons: false,
			flipButtons: false,
		},
		preferencesModal: {
			layout: 'box',
			equalWeightButtons: true,
			flipButtons: false,
		},
	},
	categories: {
		necessary: {
			enabled: true,
			readOnly: true,
		},
		analytics: {},
	},
	language: {
		default: 'en',
		translations: {
			en: {
				consentModal: {
					title: 'We use cookies',
					description:
						'We use cookies to analyze site traffic and optimize your experience.',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					showPreferencesBtn: 'Manage preferences',
				},
				preferencesModal: {
					title: 'Cookie preferences',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					savePreferencesBtn: 'Save preferences',
					sections: [
						{
							title: 'Cookie usage',
							description:
								'We use cookies to ensure basic site functionality and to improve your experience.',
						},
						{
							title: 'Strictly necessary cookies',
							description:
								'These cookies are essential for the website to function and cannot be disabled.',
							linkedCategory: 'necessary',
						},
						{
							title: 'Analytics cookies',
							description:
								'These cookies help us understand how visitors interact with the website.',
							linkedCategory: 'analytics',
						},
					],
				},
			},
		},
	},
});
