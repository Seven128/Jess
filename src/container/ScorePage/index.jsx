import React from 'react';
import { Form } from 'antd';

import './style.less';

export default function ScorePage() {
    return (
        <div>
            <div className="scoreHeader">
                <div>学生成绩管理</div>
                <div>
                    <Button type="primary">导出成绩</Button>
                    <Button type="primary">导入成绩</Button>
                    <Form>

                    </Form>
                </div>
            </div>
        </div>
    )
}
