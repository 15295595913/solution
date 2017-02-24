
1、解决ajaxPost的乱码问题.(图)

- 原因：
- 前台utf-8-> java代码转换(request) -> java需要的Unicode字符集
-      后台java需要的Unicode字符集 -> java代码转换(response) ->前台需要的utf-8

2、nodeType

                        12种
    node.element_node(1)
    node.attribute_node(2)
    node.text_node(3)
    node.cdata_section_node(4)
    node.entity_reference_node(5)
    node.entity_node(6)
    node.processing_instruction_node(7)
    node.comment_node(8)
    node.document_node(9)
    node.document_type_node(10)
    node.document_fragmbnt_node(11)
    node.notation_node(12)
3、使用md解析cdn服务
http://www.bootcdn.cn/marked/

方式获取md内容。使用marked函数。

4、git相关知识