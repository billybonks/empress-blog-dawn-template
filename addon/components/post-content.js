import Component from '@glimmer/component';

export default class PostContentComponent extends Component {
    highlightCode(){
        Prism.highlightAll()
    }
}
