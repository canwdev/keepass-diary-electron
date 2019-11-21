import TableCell from "@material-ui/core/TableCell"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import {handleChangeColor, showDetailWindow} from "./utils"
import clsx from "clsx"
import {formatDate} from "../../utils"
import TableRow from "@material-ui/core/TableRow"
import React from "react"

export default function ListItem(props) {
  const {
    row,
    currentEntry,
    classes,
    rowChecked,
    handleRightClick,
    handleCheckEntry,
    handleEntryItemClick,
    setUpdater
  } = props
  return (
    <TableRow
      selected={currentEntry.uuid.id === row.uuid.id}
      key={row.uuid.id}
      className={classes.tableRow}
      onContextMenu={(event) => {
        handleRightClick(event, row)
      }}
    >
      <TableCell padding="checkbox">
        <div className={classes.checkboxWrap}>
          <Checkbox
            className={classes.checkBox}
            checked={rowChecked}
            onClick={() => {
              handleCheckEntry(row)
            }}
          />
          <IconButton
            size="small"
            onClick={() => {
              handleChangeColor(row._ref, setUpdater)
            }}
          >
            <i
              style={{
                backgroundColor: row.bgColor,
                color: row.fgColor
              }}
              className={clsx(classes.icon, `fa fa-${row.icon}`)}
            />
          </IconButton>
        </div>

      </TableCell>
      <TableCell
        className={classes.tableCell}
        onClick={() => {
          showDetailWindow(row._ref)
        }}
      >
        <span>{row.title}</span>
      </TableCell>
      <TableCell
        className={classes.tableCell}
        onClick={() => {
          handleEntryItemClick(row)
        }}
      >{formatDate(row.creationTime)}</TableCell>
      <TableCell
        className={classes.tableCell}
        onClick={() => {
          handleEntryItemClick(row)
        }}
      >{formatDate(row.lastModTime)}</TableCell>
    </TableRow>
  )
}