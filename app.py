import os
from flask import Flask, render_template, jsonify, request, redirect
import json
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func


app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/data")
def data():
    json_file = open("/Users/khaledkhatib/Documents/GitHub/Geospatial-Opportunities-for-Supermarkets/supermarket_locations/longos_locations.json", "r", encoding ="utf-8")
    data = json.load(json_file)
    json_file.close
    return jsonify(data)


if __name__ == "__main__":
    app.run()


# engine = create_engine('postgresql://postgres:********@localhost:5432/geomap')

# Base = automap_base()

# Base.prepare(engine, reflect = True)

