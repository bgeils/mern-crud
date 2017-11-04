Collection: consumption

```json
{
	"deviceid": device id,
	"start_time": timestamp_utc,
	"duration": duration in seconds,
	"energy": energy in watt-hours
}
```

Colleciton: production

```json
{
	"deviceid": device id,
	"start_time": timestamp_utc,
	"duration": duration in seconds,
	"energy": energy in watt-hours
}
```

Collection: accounts

```json
{
	"userid": user's id,
	"devices": [ array of device ids ]
}
```