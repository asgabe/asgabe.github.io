module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: ['src/public/css/home.css', 'src/public/css/main.css'],
                dest: 'src/public/css/source.css'
            }
        },
        less: {
            development: {
                options: {
                    paths: ["src/public/css"],
                    compress: false,
                },
                files: {
                    "src/public/css/main.css": "src/assets/less/source.less"
                }
            }
        },
        watch: {
            less: {
                files: ['src/assets/less/source.less'],
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['less']);
};