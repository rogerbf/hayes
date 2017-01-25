# AT command syntax

- to terminate a command line `<CR>`
- response: `<CR><LF><response><CR><LF>`
- 3 main categories of syntax
  - Basic
  - S Parameter
  - Extended

## SIM800

A combination of standards

- 3GPP TS 27.005
- 3GPP TS 27.007
- ITU-T V.25ter
- SIMCom

### supported character sets

- GSM format
- UCS2
- HEX
- IRA
- PCCP
- PCDN
- 8859-1

Defaults to `IRA` character set.

The 3GPP TS 27.007 command `AT+CSCS` can be used to test/write character sets. (Specification 3GPP TS 27.005)

#### Affects

- Transmission/reception of SMS and SMS Cell Broadcast messages
- Entry/display of phone book test fields
- SIM Application Toolkit alpha strings

## Basic syntax

- `AT<x><n>`
- `AT&<x><n>`

`<x>` the command.
`<n>` the argument(s). Optional, default if missing.

## S Parameter syntax

- `ATS<n>=<m>`

`<n>` index of the S-register to set
`<m>` value to assign. Optional, default if missing.

## Extended syntax

`<x>` the command

### Test command

- `AT+<x>=?`

Returns a list of parameters and value ranges set with the command.

### Read command

- `AT+<x>?`

Returns the currently set value of the parameter(s).

### Write command

- `AT+<x>=<...>`

`<...>` parameter(s).

### Execution command

- `AT+<x>`

Reads paramters affected by internal processes.

## Combining AT commands on the same Command line

- Command line buffer max size: 556 characters excluding the "AT" prefix. "ERROR" is returned if limit is exceeded.
- semicolon as command delimiter after a extended command, not needed otherwise (basic, s parameter).

### example

```
ATE1Q0S0=1S3=13V1X4;+IFC=0,0;+IPR=115200;&W
```

## Successive AT commands on separate lines

Wait for resoponse from last entered command (i.e. OK, CME error, CMS error) before entering the next.
