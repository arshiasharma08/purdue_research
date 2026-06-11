"""
Purdue Research Matchmaker - Flask Application
A student-built tool for exploring Purdue professors and research opportunities
"""

from flask import Flask, render_template

app = Flask(__name__, 
    template_folder='templates',
    static_folder='static',
    static_url_path='/static'
)

@app.route('/')
def index():
    """Render the main application page"""
    return render_template('index.html')

@app.route('/health')
def health():
    """Health check endpoint for deployment"""
    return {'status': 'ok'}, 200

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return {'error': 'Page not found'}, 404

@app.errorhandler(500)
def server_error(error):
    """Handle 500 errors"""
    return {'error': 'Server error'}, 500

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)

