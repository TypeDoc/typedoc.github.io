var docpadConfig = {
	templateData: {
		site: {
			url: 'http://typedoc.io',
			github: 'https://github.com/sebastian-lenz/typedoc',
            edit: 'https://github.com/TypeDoc/typedoc.github.io/edit/source/src/docpad/documents/',
			home: '/',
			title: 'TypeDoc',
			styles: [
				'//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Source+Code+Pro:400,700',
				'/assets/css/main.css'
			],
			/* scripts: [
				'//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js',
				'/assets/js/main.js'
			], */
			analytics: {
				id: 'UA-53674298-1',
				site: 'typedoc.io'
			}
		},
		getPreparedTitle: function() {
			if (this.document.title) {
				return '' + this.document.title + ' | ' + this.site.title;
			} else {
				return this.site.title;
			}
		},
		getPreparedDescription: function() {
			return this.document.description || this.site.description;
		},
		getPreparedKeywords: function() {
			return this.site.keywords.concat(this.document.keywords || []).join(', ');
		}
	},
	collections: {
		pages: function() {
			return this.getCollection('documents').findAllLive({
				relativeOutDirPath: 'pages'
			});
		}
	},
	environments: {
		development: {
			templateData: {
				site: {
					url: false
				}
			}
		}
	},
	plugins: {
	},
	events: {
	}
};

module.exports = docpadConfig;
