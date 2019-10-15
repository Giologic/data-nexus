# Data Nexus

Data Nexus is a Node JS API server that hosts open source datasets.

## Usage

Run the application with docker
```sh
docker-compose up
```

To check if the instance is running
```sh
curl http://localhost:5000
```

#### Upload data
POST <http://localhost:5000/api/v1/datasets>
```json
{
  "name": "land-elevation",
  "description": "A Land Elevation CSV Format",
  "created_at": "2019-10-15T03:35:53.147Z",
  "updated_at": "2019-10-15T03:35:53.148Z",
  "collection_type": "terrain",
  "data": [
    {
      "index": "6",
      "value": "57",
      "geometry": "POLYGON ((121.0744642194859 14.62328312054317, 121.0744642194859 14.62418244090689, 121.0753936236556 14.62418244090689, 121.0753936236556 14.62328312054317, 121.0744642194859 14.62328312054317))"
    },
    {
      "index": "7",
      "value": "55",
      "geometry": "POLYGON ((121.0744642194859 14.62418244090689, 121.0744642194859 14.62508176127062, 121.0753936236556 14.62508176127062, 121.0753936236556 14.62418244090689, 121.0744642194859 14.62418244090689))"
      },
  ]
}
```

#### Get all dataset endpoints

GET <http://localhost:5000/api/v1/datasets>
```json
{
  "collection_endpoints": [
    "/api/v1/terrain",
    "/api/v1/water"
  ]
}
```

#### Get datasets per collection type

GET <http://localhost:5000/api/v1/:collection_type>
```json
{
  "datasets": [
    {
      "name": "land-elevation",
      "endpoint": "/api/v1/terrain/land-elevation",
      "created_at": "2019-10-15T03:29:33.950Z",
      "updated_at": "2019-10-15T03:29:33.982Z"
    },
    {
      "name": "land-contour",
      "endpoint": "/api/v1/terrain/contour",
      "created_at": "2019-10-15T03:35:53.147Z",
      "updated_at": "2019-10-15T03:35:53.148Z"
    }
  ]
}
```

#### Get dataset specific dataset from collection type

GET <http://localhost:5000/api/v1/:collection_type/:name>
```json
{
  "name": "land-elevation",
  "description": "A Land Elevation CSV Format",
  "created_at": "2019-10-15T03:35:53.147Z",
  "updated_at": "2019-10-15T03:35:53.148Z",
  "collection_type": "terrain",
  "data": [
    {
      "index": "6",
      "value": "57",
      "geometry": "POLYGON ((121.0744642194859 14.62328312054317, 121.0744642194859 14.62418244090689, 121.0753936236556 14.62418244090689, 121.0753936236556 14.62328312054317, 121.0744642194859 14.62328312054317))"
    },
    {
      "index": "7",
      "value": "55",
      "geometry": "POLYGON ((121.0744642194859 14.62418244090689, 121.0744642194859 14.62508176127062, 121.0753936236556 14.62508176127062, 121.0753936236556 14.62418244090689, 121.0744642194859 14.62418244090689))"
      },
  ]
}
```

Check out how the endpoints work through postman!

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/20df48838651506d535f)

###  



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)