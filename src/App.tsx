import React, { useState } from 'react'
import { Button, Table } from 'antd'
import { useAntdTable } from 'ahooks'
// import 'antd/es/upload/style/index.less'
// import 'antd/es/button/style/index.less'
import EditModal from './editModal'

export default () => {
  const [visible, setVisible] = useState(false)
  const [initProps, setInitProps] = useState({})

  const edit = (record: any) => {
    setInitProps(record)
    setVisible(true)
  }
  const handleOk = () => {
    console.log('okkkkk')
    setVisible(false)
  }
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'handle',
      render: (_: any, record: any) => (
        <Button type='primary' onClick={() => edit(record)}>
          编辑
        </Button>
      ),
    },
  ]
  const data = [
    {
      name: 'zs',
      email: 'laksdjf',
      phone: '121212',
    },
    {
      name: 'ls',
      email: 'laksdjf',
      phone: '121212',
    },
  ]
  return (
    <div className='w-full'>
      ``
      <Button type='primary'>新增</Button>
      <Table columns={columns} dataSource={data} rowKey='email' scroll={{ y: 400 }} />
      <EditModal visible={visible} initProps={initProps} onOk={handleOk} />
    </div>
  )
}
