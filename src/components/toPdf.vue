<template>
  <div class="to-pdf">
    <a @click="toPdf">导出PDF</a>
  </div>
</template>

<script>
  import html2canvas from "html2canvas";
  import jsPDF from "jspdf";
  import $ from "jquery";

  export default {
    methods: {
      toPdf(){
        this.formatDOMs();
        html2canvas(document.getElementById("app"))
          .then(canvas => {
            let contentWidth = canvas.width;
            let contentHeight = canvas.height;

            //一页pdf显示html页面生成的canvas高度;
            let pageHeight = contentWidth / 592.28 * 841.89;
            //未生成pdf的html页面高度
            let leftHeight = contentHeight;
            //页面偏移
            let position = 0;
            //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            let imgWidth = 595.28;
            let imgHeight = 592.28 / contentWidth * contentHeight;

            let pageData = canvas.toDataURL('image/jpeg', 1.0);

            let pdf = new jsPDF('', 'pt', 'a4');

            //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            //当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
              pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else {
              while(leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                leftHeight -= pageHeight;
                position -= 841.89;
                //避免添加空白页
                if (leftHeight > 0) {
                  pdf.addPage();
                }
              }
            }

            pdf.save('resume.pdf');
          });
      },
      formatDOMs(){
        let addMarginTop = 30;
        let pageHeight = 1138.5;
        let maxHeight = 1108.5;
        let accHeight = 0;
        let root = document.getElementById("app");
        let filter = function(node) {
          let style = document.defaultView.getComputedStyle(node, null);
          return (style.display === "block" || style.display === "flex") ?
            NodeFilter.FILTER_ACCEPT :
            NodeFilter.FILTER_SKIP;
        };
        let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, filter, false);
        let startNode = walker.nextNode();
        iterator(startNode);

        function returnNextParentSibling() {
          let node = walker.parentNode();
          let isRootParent = node === root;
          let nextSibling = walker.nextSibling();
          if (!nextSibling) {
            if (isRootParent) {
              return null
            } else {
              let computedStyle = document.defaultView.getComputedStyle(node, null);
              let paddingBottom = Number(computedStyle.paddingBottom.slice(0, -2));
              accHeight += paddingBottom;
              return returnNextParentSibling();
            }
          } else {
            return nextSibling;
          }
        }

        function iterator(node) {
          if (node === null) {
            return;
          }

          let nodeHeight = $(node).outerHeight();
          if (accHeight + nodeHeight < maxHeight) {
            accHeight += nodeHeight;
            node = walker.nextSibling();
            if (!node) node = returnNextParentSibling();
            iterator(node);
          } else {
            if (document.defaultView.getComputedStyle(node, null).display === "flex") {
              node.style.marginTop = (pageHeight - accHeight + addMarginTop) + "px";
              accHeight = addMarginTop + nodeHeight;
              node = walker.nextSibling();
              if (!node) node = returnNextParentSibling();
              iterator(node);
            } else {
              let computedStyle = document.defaultView.getComputedStyle(node, null);
              let paddingTop = Number(computedStyle.paddingTop.slice(0, -2));
              node = walker.firstChild();
              if (node === null) {
                node = walker.parentNode();
                node.style.marginTop = (pageHeight - accHeight + addMarginTop) + "px";
                accHeight = addMarginTop + nodeHeight;
                node = walker.nextSibling();
                if (!node) node = returnNextParentSibling();
                iterator(node);
              } else {
                accHeight += paddingTop;
                iterator(node);
              }
            }
          }
        }
      }
    }
  }
</script>

<style>
  .to-pdf {
    text-align: center;
    border-top: 1px solid #eee;
    padding-top: 30px;
  }

  .to-pdf a {
    cursor: pointer;
    padding: 5px 30px;
    background: #666;
    color: #fff;
    border-radius: 2px;
  }
</style>
