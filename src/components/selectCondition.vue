<template>
  <div class="ys-select-condition" style="box-shadow: rgb(204, 204, 204) 0px 2px 5px;">
        <dl class="item-dl" id="w-b">
            <dt>分类:</dt>
            <dd>
                <div class="smallList">
                    <a>劳力士
                        <b>(235)</b>
                    </a>
                </div>
                <div class="bigList">
                    <div class="search-brand-list">
                        <a  >劳力士
                            <b>(235)</b>
                        </a>
                    </div>
                </div>
            </dd>
            <a href="javascript:;" class="choice" style="display: block;">更多</a>
        </dl>
        <dl>
            <dt>价格:</dt>
            <dd>
                <div class="smallList">
                    <a href="#" >5000以下</a>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .ys-select-condition {
        background: #fff;
        width: 1200px;
        dl{
            border-bottom: 1px dashed #ededed;
            min-height: 46px;
            clear: both;
            position: relative;
            overflow: hidden;
            background: #f5f5f5;
            dt,dd {
                float: left;
            }
            dt {
                width: 81px;
                padding-left: 30px;
                line-height: 45px;
                color: #666;
            }
            dd {
                padding-left: 10px;
                width: 1078px;
                min-height: 46px;
                background: #fff;
            }

            a.choice, a.brandChoice {
                position: absolute;
                right: 24px;
                top: 15px;
                padding-right: 12px;
                width: 30px;
                background-position: 27px -107px;
            }

            a.more,  a.brandmore {
                position: absolute;
                right: 69px;
                top: 15px;
                padding-left: 12px;
                width: 30px;
                background-position: 0 -71px;
            }
        }
    }

    #w-b .smallList {
        max-height: 110px;
        height: auto;
        margin-bottom: 15px;
    }
    .item-dl .smallList {
        padding: 1px 0 7px 0;
    }
    .item-dl .smallList, .brand {
        max-height: 70px;
        height: auto;
    }
    .smallList {
        width: 960px;
        overflow: hidden;
        padding: 3px 0 0 0;
        height: 32px;
    }
    .bigList {
        width: 1046px;
        visibility: hidden;
        position: absolute;
    }
    .search-brand-list {
        min-height: 35px;
        max-height: 140px;
        overflow-y: auto;
        margin: 4px 0 15px;
        width: 955px;
        position: relative;
    }
    .smallList a {
        margin: 12px 0 0;
        height: 22px;
        padding: 0 22px 0 10px;
        white-space: nowrap;
        max-width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
    }
</style>
