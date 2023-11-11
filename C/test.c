#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef int E; // 这个还是老样子

struct ListNode
{
    E element;             // 保存当前元素
    struct ListNode *next; // 指向下一个结点的指针
};

typedef struct ListNode *Node; // 这里我们直接为结点指针起别名，可以直接作为表实现

void initList(Node head)
{
    head->next = NULL; // 头结点默认下一个为NULL
}

_Bool insertList(Node head, E element, int index)
{
    if (index < 1)
        return 0;
    while (--index)
    {
        head = head->next;
        if (head == NULL)
            return 0;
    }
    Node node;
    node = (Node)malloc(sizeof(struct ListNode));
    if (node == NULL)
        return 0;            // 创建一个新的结点，如果内存空间申请失败返回0
    node->element = element; // 将元素保存到新创建的结点中
    node->next = head->next; // 先让新插入的节点指向原本位置上的这个结点
    head->next = node;       // 接着将前驱结点指向新的这个结点
    return 1;
}

void printList(Node head)
{
    while (head->next)
    {
        head = head->next;
        printf("%d ", head->element); // 因为头结点不存放数据，所以从第二个开始打印
    }
}

_Bool deleteList(Node head, int index)
{
    if (index < 0)
        return 0;
    while (index--)
    {
        head = head->next;
        if (head == NULL)
            return 0;
    }
    if (head->next == NULL)
        return 0;
    Node tmp = head->next;         // 先拿到待删除结点
    head->next = head->next->next; // 直接让前驱结点指向下一个的下一个结点
    free(tmp);                     // 最后使用free函数释放掉待删除结点的内存
    return 1;
}

int main()
{
    struct ListNode head;
    initList(&head);
    for (int i = 0; i <= 3; ++i)
    {
        insertList(&head, i * 100, i); // 依次插入3个元素
    }
    // printList(&head); // 打印一下看看
    printf("%d\n", head.next->next->element);
}
