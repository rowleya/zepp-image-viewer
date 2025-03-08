from flask import Flask, jsonify, Response
import sys
import os

app = Flask(__name__)

file_path = None

@app.route("/")
def list_files():
    files = os.listdir(file_path)
    return jsonify(files)

@app.route("/<string:filename>")
def get_file(filename):
    with open(f"{file_path}/{filename}", 'rb') as f:
        data = f.read()
    return Response(data, content_type="application/octet-stream")

if __name__ == "__main__":
    file_path = sys.argv[1]
    app.run()
