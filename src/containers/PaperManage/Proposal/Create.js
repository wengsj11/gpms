import React, { Component } from 'react'
import NewContainerLayout from 'components/NewContainerLayout';
import {Card, Row, Col, Radio, Form, Upload, Button, Icon,message, Divider } from 'antd'
import './index.css'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Dragger = Upload.Dragger;

export default class ProposalCreate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      submit_type: "1",
      fileList: [],
    }
  }

  handleChange = (info) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);

    fileList = fileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });

    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  handleSubmit = () => {

  }

  render() {

    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 8,
          offset: 2,
        },
      },
    }

    return (
      <NewContainerLayout>
        <Card title="开题报告提交">
          <Row style={{marginBottom:20}}>
            <Col span={24} style={{marginTop:3}}>
                <div style={{ display: 'inline-flex', width: '100%' }}>
                  <span className='condition-style'>提交方式：</span>
                  <RadioGroup value={this.state.submit_type} onChange={(e)=>{this.setState({submit_type:e.target.value})}}>
                    <RadioButton value="1">文件上传</RadioButton>
                    <RadioButton value="2">表单提交</RadioButton>
                  </RadioGroup>
                </div>
            </Col>
          </Row>
          <Row>
            <h3 style={{fontWeight:'bold'}}>{this.state.submit_type === '1' ? '文件上传':'表单提交'}</h3>
          </Row>
          <Row style={{marginBottom:20}}>
            <Col span={24} style={{marginTop:3}}>
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              {
                this.state.submit_type === '1' ?
                <div>
                  <Form.Item label="上传附件" >
                    <Dragger {...props} fileList={this.state.fileList}>
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">点击或拖动文件至此处上传</p>
                      <p className="ant-upload-hint">注意只支持上传一个文件，请勿上传其他私密文件</p>
                    </Dragger>
                  </Form.Item>
                </div>
                :
                <div>
                  表单提交
                </div>
              }
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary">保存</Button>
                <Button style={{marginLeft:20}}>取消</Button>
              </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
      </NewContainerLayout>
    )
  }
}
