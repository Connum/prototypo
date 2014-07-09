// Generated on 2014-01-31 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		yeoman: {
			// configurable paths
			app: require('./bower.json').appPath || 'app',
			dist: 'dist'
		},

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			js: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.js','<%= yeoman.app %>/webcomponents/{,*/}*.js'],
				//tasks: ['newer:jshint:all'],
				options: {
					livereload: true
				}
			},
			jsTest: {
				files: ['test/spec/{,*/}*.js'],
				tasks: ['newer:jshint:test'/*, 'karma:unit'*/]
			},
			sass: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
				tasks: ['sass', 'autoprefixer']
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= yeoman.app %>/{,*/}*.html',
					'.tmp/styles/{,*/}*.css',
					'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		// The actual grunt server settings
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: '0.0.0.0',
				livereload: 35729
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp',
						'<%= yeoman.app %>'
					]
				}
			},
			test: {
				options: {
					port: 9001,
					base: [
						'.tmp',
						'test',
						'<%= yeoman.app %>'
					]
				}
			},
			dist: {
				options: {
					base: '<%= yeoman.dist %>'
				}
			}
		},

		traceur: {
			custom: {
				files:{
					'build/': ['<%= yeoman.app %>/scripts/{,*/}*.js']
				}
			}
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js'
			],
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/spec/{,*/}*.js']
			}
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},

		// Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['last 1 version']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},

		// Automatically inject Bower components into the app
		'bower-install': {
			app: {
				html: '<%= yeoman.app %>/index.html',
				ignorePath: '<%= yeoman.app %>/'
			}
		},

		sass: {
			all: {
				options: {
					includePaths: ['<%= yeoman.app %>/styles']
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/styles/',
					src: '{,*/}*.scss',
					dest: '.tmp/styles/',
					ext: '.css'
				}]
			}
		},

		// Renames files for browser caching purposes
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						'<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= yeoman.app %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},

		// Performs rewrites based on rev and the useminPrepare configuration
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
			}
		},

		// The following *-min tasks produce minified files in the dist folder
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg,gif}',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeCommentsFromCDATA: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>',
					src: ['*.html', 'views/{,*/}*.html'],
					dest: '<%= yeoman.dist %>'
				}]
			}
		},

		// Allow the use of non-minsafe AngularJS files. Automatically makes it
		// minsafe compatible so Uglify does not destroy the ng references
		ngmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: '*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		// Replace Google CDN references
		// -> not useful yet, we use custom builds of jQuery
		/*cdnify: {
			dist: {
				html: ['<%= yeoman.dist %>/*.html']
			}
		},*/

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'*.html',
						'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						'fonts/*',
						// uncomment the following line when disabling ngtemplates
						//'views/{,*/}*.html',
						// uncomment the two following lines when disabling concat
						//'bower_components/**/*',
						//'libs/*',
						'_typeface/**/**/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: ['generated/*']
				}]
			},
			styles: {
				expand: true,
				cwd: '<%= yeoman.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			},
			zip: {
				files: [
				{ expand: true, dot: true, cwd: '<%= yeoman.dist %>', dest: '<%= yeoman.dist %>', src: ['scripts/*.gz'], ext: '.scripts.js' },
				{ expand: true, dot: true, cwd: '<%= yeoman.dist %>', dest: '<%= yeoman.dist %>', src: ['styles/*.gz'], ext: '.style.css' },
				{ expand: true, dot: true, cwd: '<%= yeoman.dist %>', dest: '<%= yeoman.dist %>', src: ['*.html.gz'], ext: '.html' }
				]
			}
		},

		// Run some tasks in parallel to speed up the build process
		concurrent: {
			server: [
				'sass',
				'copy:styles'
			],
			test: [
				'copy:styles'
			],
			dist: [
				'sass',
				'copy:styles',
				'imagemin',
				'svgmin'
			]
		},

		// By default, your `index.html`'s <!-- Usemin block --> will take care of
		// minification. These next options are pre-configured if you do not wish
		// to use the Usemin blocks.
		// cssmin: {
		//   dist: {
		//     files: {
		//       '<%= yeoman.dist %>/styles/main.css': [
		//         '.tmp/styles/{,*/}*.css',
		//         '<%= yeoman.app %>/styles/{,*/}*.css'
		//       ]
		//     }
		//   }
		// },
		// uglify: {
		//   dist: {
		//     files: {
		//       '<%= yeoman.dist %>/scripts/scripts.js': [
		//         '<%= yeoman.dist %>/scripts/scripts.js'
		//       ]
		//     }
		//   }
		// },
		// concat: {
		//   dist: {}
		// },

		// Test settings
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},

		// Precompile angular templates and concatenates them with other scripts
		// app will load faster and views will be revved
		ngtemplates: {
			app: {
				cwd: '<%= yeoman.app %>',
				src: 'views/**/*.html',
				dest: '.tmp/templates/templates.js',
				options: {
					module: 'prototypoApp'
				}
			}
		},

		// gzip etc
		compress: {
		  dev: {
			options: {
			  mode: 'gzip'
			},
			files: [
				{expand: true, src: ['<%= yeoman.dist %>/*.html'], dest: '', ext:'.html.gz'},
				{expand: true, src: ['<%= yeoman.dist %>/scripts/*.js'], dest: '', ext:'.scripts.js.gz'},
				{expand: true, src: ['<%= yeoman.dist %>/styles/*.css'], dest: '', ext:'.style.css.gz'}
			]
		  }
		},

		// allow dist folder to be uploaded to s3
		aws_s3: {
			options: {
				accessKeyId: process.env.S3_KEY,
				secretAccessKey: process.env.S3_SECRET,
				bucket: process.env.S3_BUCKET,
				region: 'eu-west-1',
				access: 'public-read'
//				uploadConcurrency: 5, // 5 simultaneous uploads
//    			downloadConcurrency: 5 // 5 simultaneous downloads
			},
			// _typeface isn't revved yet, so don't cache it.
			// I don't think index.html should be cached.
			dev: {
				files: [
					{expand: true, cwd: '<%= yeoman.dist %>/', src: ['_typeface/**/**/*'], dest: ''/*, params: { ContentEncoding: 'gzip' }*/ },
					{expand: true, cwd: '<%= yeoman.dist %>/', src: ['*.html'], dest: '', params: { ContentEncoding: 'gzip' } },
					{expand: true, cwd: '<%= yeoman.dist %>/', src: ['images/*.{png,jpg,svg}'], dest: '',
						params: {
							// Two Year cache policy (1000 * 60 * 60 * 24 * 730)
							CacheControl: 'max-age=630720000, public',
							Expires: new Date(Date.now() + 63072000000)
						}
					},
					{expand: true, cwd: '<%= yeoman.dist %>/', src: ['scripts/*.js'], dest: '',
						params: {
							// Two Year cache policy (1000 * 60 * 60 * 24 * 730)
							CacheControl: 'max-age=630720000, public',
							Expires: new Date(Date.now() + 63072000000),
							ContentEncoding: 'gzip'
						}
					},
					{expand: true, cwd: '<%= yeoman.dist %>/', src: ['styles/*.css'], dest: '',
						params: {
							// Two Year cache policy (1000 * 60 * 60 * 24 * 730)
							CacheControl: 'max-age=630720000, public',
							Expires: new Date(Date.now() + 63072000000),
							ContentEncoding: 'gzip'
						}
					},
					{expand: true, cwd: '<%= yeoman.dist %>/', src: ['favicon.ico'], dest: '',
						params: {
							// One week cache policy (1000 * 60 * 60 * 24 * 7)
							CacheControl: 'max-age=604800000, public',
							Expires: new Date(Date.now() + 604800000)
						}
					},
					{expand: true, cwd: '<%= yeoman.dist %>/', src: ['robots.txt'], dest: '' }
				]
			}
		},
		'invalidate_cloudfront': {
			options: {
				key: process.env.CF_KEY,
				secret: process.env.CF_SECRET,
				distribution: process.env.CF_DISTRIB
			},
			production: {
				files: [{
					src: ['<%= yeoman.dist %>/index.html'],
					dest: 'index.html'
				}]
			}
		}
	});


	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			//'bower-install',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});

	grunt.registerTask('test', [
		'clean:server',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma:unit'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'ngtemplates',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'ngmin',
		'copy:dist',
		// not sure cdnify is a good idea
		//'cdnify',
		'cssmin',
		'uglify',
		'rev',
		'usemin'/*,
		'htmlmin'*/
	]);

	grunt.registerTask('deploy', function() {
		// only deploy from byte-foundry/prototypo/master
		if (
			process.env.TRAVIS &&
			process.env.TRAVIS_BRANCH === 'master' &&
			process.env.TRAVIS_REPO_SLUG === 'byte-foundry/prototypo'
		) {
			grunt.task.run([
				'compress',
				'copy:zip',
				'aws_s3',
				'invalidate_cloudfront'
			]);
		}
	});

	grunt.registerTask('default', [
		'newer:jshint',
		'test',
		'build'
	]);
};
