Collection: consum

```json
{
	"device_id": device id,
	"start_time": timestamp_utc,
	"duration": duration in seconds,
	"energy": energy in watt-hours
}
```

Collection: prod

```json
{
	"device_id": device id,
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

Collection: sellOrders
```json
{
	"status": status of order // Pending, Active, Suspended, Closed,
	"amount": energy in watt-hours,
	"price": price in USD
}
```

Collection: buyOrders
```json
{
	"status": status of order // Pending, Active, Suspended, Closed,
	"amount": energy in watt-hours,
	"price": price in USD
}
```