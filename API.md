@dsp-ts/math

# @dsp-ts/math

## Table of contents

### Functions

- [clamp](API.md#clamp)
- [clamp01](API.md#clamp01)
- [mapFrom01Linear](API.md#mapfrom01linear)
- [mapTo01Linear](API.md#mapto01linear)

## Functions

### clamp

▸ **clamp**(`x`, `min`, `max`): `number`

Clamps "x" value in [min..max] range

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Value to clamp |
| `min` | `number` | Minimum value |
| `max` | `number` | Maximum value |

#### Returns

`number`

Clamped value

#### Defined in

[clamp.ts:8](https://github.com/satelllte/dsp-ts-math/tree/main/packages/math/src/clamp.ts#L8)

___

### clamp01

▸ **clamp01**(`x`): `number`

Clamps "x" value in [0..1] range

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Value to clamp |

#### Returns

`number`

Clamped value

#### Defined in

[clamp.ts:16](https://github.com/satelllte/dsp-ts-math/tree/main/packages/math/src/clamp.ts#L16)

___

### mapFrom01Linear

▸ **mapFrom01Linear**(`x`, `min`, `max`): `number`

Maps "x" value in [0..1] range onto [min..max] range linearly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Value in [0..1] range to map |
| `min` | `number` | Minimum value of the range to map onto |
| `max` | `number` | Maximum value of the range to map onto |

#### Returns

`number`

Mapped result in [min..max] range

#### Defined in

[map01Linear.ts:8](https://github.com/satelllte/dsp-ts-math/tree/main/packages/math/src/map01Linear.ts#L8)

___

### mapTo01Linear

▸ **mapTo01Linear**(`x`, `min`, `max`): `number`

Maps "x" value in [min..max] range onto [0..1] range linearly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Value in [min..max] range to map |
| `min` | `number` | Minimum value of the range to map from |
| `max` | `number` | Maximum value of the range to map from |

#### Returns

`number`

Mapped result in [0..1] range

#### Defined in

[map01Linear.ts:18](https://github.com/satelllte/dsp-ts-math/tree/main/packages/math/src/map01Linear.ts#L18)
