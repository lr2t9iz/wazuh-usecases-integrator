{
  "description": "Wazuh alerts pipeline",
  "processors": [
    {
      "json": {
        "field": "message",
        "add_to_root": true
      }
    },
    {
      "geoip": {
        "field": "data.srcip",
        "target_field": "GeoLocation",
        "properties": [
          "city_name",
          "country_name",
          "region_name",
          "location"
        ],
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "geoip": {
        "field": "data.win.eventdata.ipAddress",
        "target_field": "GeoLocation",
        "properties": [
          "city_name",
          "country_name",
          "region_name",
          "location"
        ],
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "geoip": {
        "field": "data.aws.sourceIPAddress",
        "target_field": "GeoLocation",
        "properties": [
          "city_name",
          "country_name",
          "region_name",
          "location"
        ],
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "geoip": {
        "target_field": "GeoLocation",
        "properties": [
          "city_name",
          "country_name",
          "region_name",
          "location"
        ],
        "ignore_missing": true,
        "ignore_failure": true,
        "field": "data.gcp.jsonPayload.sourceIP"
      }
    },
    {
      "geoip": {
        "properties": [
          "city_name",
          "country_name",
          "region_name",
          "location"
        ],
        "ignore_missing": true,
        "ignore_failure": true,
        "field": "data.office365.ClientIP",
        "target_field": "GeoLocation"
      }
    },
    {
      "date": {
        "ignore_failure": false,
        "field": "timestamp",
        "target_field": "@timestamp",
        "formats": [
          "ISO8601"
        ]
      }
    },
    {
      "date_index_name": {
        "index_name_format": "yyyy.MM.dd",
        "ignore_failure": false,
        "field": "timestamp",
        "date_rounding": "d",
        "index_name_prefix": "{{fields.index_prefix}}"
      }
    },
    {
      "remove": {
        "field": "message",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "ecs",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "beat",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "input_type",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "tags",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "count",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "@version",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "log",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "offset",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "type",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "host",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "fields",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "event",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "fileset",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "remove": {
        "field": "service",
        "ignore_missing": true,
        "ignore_failure": true
      }
    },
    {
      "pipeline": {
        "name": "filebeat-custom"
      }
    }
  ],
  "on_failure": [
    {
      "drop": {}
    }
  ]
}