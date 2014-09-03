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
			description: 'A flexible utility that transform your TypeScript projects into beautiful HTML documentation pages.',
            keywords: 'typedoc typescript documentation docs generator api doc doccomment comment reference automatic utility javadoc',
			analytics: {
				id: 'UA-53674298-1',
				site: 'typedoc.io'
			}
		},
        isInCollection: function(url, collectionName) {
            var collection = this.getCollection(collectionName);
            return !!collection.findOne({url:url});
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
		guides: function() {
			return this.getCollection('documents').findAllLive({
				relativeOutDirPath: 'guides'
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
        redirector: {
            redirects: {
                "guides/": "guides/installation.html"
            }
        }
	},
	events: {
	}
};

module.exports = docpadConfig;
