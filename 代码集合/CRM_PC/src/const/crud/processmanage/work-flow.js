export const clientOption = {
  selection: false,
  reserveSelection: false,
  selectClearBtn: false,
  addBtn: false,
  header: false,
  editBtn: false,
  delBtn: false,
  align: 'center',
  menuAlign: 'center',
  menu: true,
  menuWidth: 160,
  border: true,
  column: [{
    label: '工作流编号',
    prop: 'workId',
    width: 200,
    slot: true
  }, {
    label: '工作流名称',
    prop: 'flowName',
    width: 220,
    overHidden: true
  }, {
    label: '流程图',
    prop: 'processImg',
    slot: true
  }, {
    label: '关联产品数量',
    prop: 'productNum',
    slot: true,
    width: 150,
    overHidden: true
  }, {
    label: '创建时间',
    prop: 'createTime',
    width: 200
  }]
}