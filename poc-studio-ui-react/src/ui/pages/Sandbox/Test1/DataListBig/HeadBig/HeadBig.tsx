import React from 'react'
import classes from './HeadBig.module.scss'
import classesShared from '../Shared/Columns.module.scss'

export function HeadBig() {
    return (
        <div className={classes['header-data-list-component']}>
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-0'],
                ].join(' ')}
            >
                <span>Column 0</span>
            </div>
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-1'],
                ].join(' ')}
            >
                <span>Column 1</span>
            </div>
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-2'],
                ].join(' ')}
            >
                <span>Column 2</span>
            </div>
        </div>
    )
}
