from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from io import BytesIO
from createQr import create_qr_code

app = Flask(__name__)
CORS(app)

@app.route('/generate_qr', methods=['POST'])
def generate_qr():
    body = request.get_json()
    data = body.get("url","").strip()
    if not data:
        return jsonify({"error": "URL is required"}), 400
    
    img = create_qr_code(data)
    
    buffer = BytesIO()
    img.save(buffer, format = "PNG")
    buffer.seek(0)
    
    return send_file(buffer, mimetype='image/png')
    
