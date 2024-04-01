export function fspiralFromSameCoordinatesToYaMap(
    arrayCoordinates: string[],
    indexGlobal: number,
    itemGlobal: any
) {
    const arrayRadius: any = [
        [0, 0],
        [1, -1],
        [-1, -1],
        [-1, 1],
        [1, 1],
    ]
    let midOne = arrayCoordinates.reduce(
        (total: any, item: any, index: any) => {
            if (index >= indexGlobal) return total
            if (
                item[0] === itemGlobal.latitude &&
                item[1] === itemGlobal.longitude
            ) {
                return total + 1
            } else {
                return total
            }
        },
        0
    )
    let iconOffsetVar =
        midOne <= 4
            ? [arrayRadius[midOne][0] * 27, arrayRadius[midOne][1] * 27]
            : [
                  arrayRadius[midOne % 8][0] * Math.abs(midOne / 8) * 27,
                  arrayRadius[midOne % 8][0] * Math.abs(midOne / 8) * 27,
              ]
    return iconOffsetVar
}

export function checkEmptyAndOwerValue(
    arrayCoordinates: string[],
    indexGlobal: number,
    itemGlobal: any
) {
    const arrayRadius: any = [
        [0, 0],
        [1, -1],
        [-1, -1],
        [-1, 1],
        [1, 1],
    ]
    let midOne = arrayCoordinates.reduce(
        (total: any, item: any, index: any) => {
            if (index >= indexGlobal) return total
            if (
                item[0] === itemGlobal.latitude &&
                item[1] === itemGlobal.longitude
            ) {
                return total + 1
            } else {
                return total
            }
        },
        0
    )
    let iconOffsetVar =
        midOne <= 4
            ? [arrayRadius[midOne][0] * 27, arrayRadius[midOne][1] * 27]
            : [
                  arrayRadius[midOne % 8][0] * Math.abs(midOne / 8) * 27,
                  arrayRadius[midOne % 8][0] * Math.abs(midOne / 8) * 27,
              ]
    return iconOffsetVar
}

export function dimensionsToStyleObject(dimensions: number[]) {
    if (dimensions[0] / dimensions[1] === 1) {
        return { width: '100%' }
    } else if (dimensions[0] / dimensions[1] > 1) {
        return {
            width: '100%',
            marginTop: `${
                ((dimensions[0] - dimensions[1]) / dimensions[0]) * 50
            }%`,
            marginBottom: `${
                ((dimensions[0] - dimensions[1]) / dimensions[0]) * 50
            }%`,
        }
    } else if (dimensions[0] / dimensions[1] < 1) {
        return {
            width: `${(dimensions[0] / dimensions[1]) * 100}%`,
            marginLeft: `${
                ((dimensions[1] - dimensions[0]) / dimensions[1]) * 50
            }%`,
            marginRight: `${
                ((dimensions[1] - dimensions[0]) / dimensions[1]) * 50
            }%`,
        }
    }
}
